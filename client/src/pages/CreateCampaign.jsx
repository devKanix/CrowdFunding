import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {ethers} from 'ethers';
import {money} from '../assets';
import {CustomButton} from '../components';
import { checkIfImage} from '../utils';

const CreateCampaign = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(flase);
  const [form, setForm] = useState({

  });
  return (
    <div className=''>
      
    </div>
  )
}

export default CreateCampaign