import React, { useState, useEffect } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { db, storage,auth } from '../../firebaseConfig';
import RegistrationForm from './RegistrationForm/RegistrationForm';
import FarmerProfileForm from './RegistrationForm/FarmersProfile';
import ContractorProfileForm from './RegistrationForm/ContractorProfile';
import { toast } from 'react-toastify'

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    birthDate: '',
    phoneNumber: '',
    email: '',
    password:'',
    addressLine: '',
    villageCity: '',
    state: '',
    district: '',
    pincode: '',
    gender: '',
    profilePhoto: null,
    accountType: '',
    // Farmer-specific data
    farmArea: '',
    cropsGrown: [],
    annualProduction: '',
    financialServices: [],
    transportationAvailability: false,
    coldStorageAccess: false,
    // Contractor-specific data
    companyName: '',
    companyAddress: '',
    yearsOfExperience: '',
    purchaseCapacityMin: '',
    purchaseCapacityMax: '',
    logisticsCapabilities: ''
  });

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [step]);

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleRegistrationSubmit = async (data) => {
    let profilePhotoURL = null;
    if (data.profilePhoto) {
      const photoRef = ref(storage, `profilePhotos/${data.profilePhoto.name}`);
      await uploadBytes(photoRef, data.profilePhoto);
      profilePhotoURL = await getDownloadURL(photoRef);
    }
    
    setFormData({ ...formData, ...data, profilePhoto: profilePhotoURL });
    nextStep();
  };

  const handleFarmerProfileSubmit = async (data) => {
    const finalData = { ...formData, ...data };
    console.log('Final Data:', finalData);

    try {
      // Create user in Firebase Authentication
      const userCredential = await createUserWithEmailAndPassword(auth, formData.email, formData.password);
      const user = userCredential.user;

      // Save the user data in Firestore
      await addDoc(collection(db, 'users'), {
        uid: user.uid,
        ...finalData,
      });

      toast.success('Farmer profile data saved successfully!');
    } catch (error) {
      toast.error('Error saving farmer profile data:', error);
    }
  };

  const handleContractorProfileSubmit = async (data) => {
    const finalData = { ...formData, ...data };
    console.log('Final Data:', finalData);

    try {
       // Create user in Firebase Authentication
      const userCredential = await createUserWithEmailAndPassword(auth, formData.email, formData.password);
      const user = userCredential.user;

      // Save the user data in Firestore
      await addDoc(collection(db, 'users'), {
        uid: user.uid,
        ...finalData,
      });
      toast.success('Contractor profile data saved successfully!');
    } catch (error) {
      toast.error('Error saving contractor profile data:', error);
    }
  };

  switch (step) {
    case 1:
      return <RegistrationForm onSubmit={handleRegistrationSubmit} />;
    case 2:
      return formData.accountType === 'farmer' 
        ? <FarmerProfileForm onSubmit={handleFarmerProfileSubmit} />
        : <ContractorProfileForm onSubmit={handleContractorProfileSubmit} />;
    default:
      return <div>Unknown step</div>;
  }
};

export default MultiStepForm;



