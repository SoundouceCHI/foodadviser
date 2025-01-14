import React, { useRef, useState, useEffect, useContext } from 'react';
import { uploadImage } from '../../services/api';
import './ImageManager.css';
import { AiOutlineUpload, AiOutlineCamera } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom'; 
import { useIngredients } from '../../context/IngredientsContext';
import { AppContext } from '../../context/AppContext';
import { AuthContext } from '../../context/AuthContext';

const ImageManager = () => {
  const [image, setImage] = useState(null);
  const [message, setMessage] = useState('');
  const [imageSelected, setImageSelected] = useState(false);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [isCameraActive, setIsCameraActive] = useState(false);
  const [photoBlob, setPhotoBlob] = useState(null);
  const navigate = useNavigate(); 
  const { setIngredients } = useIngredients();
  const { setFridgeImage } = useContext(AppContext);

  const { isLoggedIn, user } = useContext(AuthContext);
  // Gestion de l'upload de fichier
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setImageSelected(true);
  
      const reader = new FileReader();
      reader.onload = () => {
        setFridgeImage(reader.result); 
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (imageFile) => {
    if (!imageFile) return;
  
    const formData = new FormData();
    formData.append('image', imageFile instanceof Blob ? imageFile : image);
  
    const result = await uploadImage(formData);
    if (result.error) {
      setMessage('Échec de l’envoi de l’image.');
    } else {
      setMessage('Image envoyée avec succès !');
      const detectedIngredients = result.detected_objects.map(obj => ({ name: obj.name }));
      setIngredients(detectedIngredients); 
      navigate('/recipeSuggestion'); 
    }
  };
  

  // Démarrer la caméra
  const startCamera = () => {
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      setMessage("Votre navigateur ne supporte pas l'accès à la caméra.");
      return;
    }
    setIsCameraActive(true);
  };

  useEffect(() => {
    const initializeCamera = async () => {
      if (isCameraActive && videoRef.current) {
        try {
          const stream = await navigator.mediaDevices.getUserMedia({ video: true });
          videoRef.current.srcObject = stream;
        } catch (error) {
          if (error.name === 'NotAllowedError') {
            setMessage("Accès à la caméra refusé. Veuillez vérifier vos permissions.");
          } else if (error.name === 'NotFoundError') {
            setMessage("Aucune caméra détectée sur cet appareil.");
          } else {
            setMessage("Erreur lors de l'accès à la caméra : " + error.message);
          }
        }
      }
    };

    initializeCamera();
  }, [isCameraActive]);

  // Prendre une photo
  const takePhoto = async () => {
    if (!videoRef.current || !canvasRef.current) return;
  
    const canvas = canvasRef.current;
    const video = videoRef.current;
    const context = canvas.getContext('2d');
  
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    context.drawImage(video, 0, 0, canvas.width, canvas.height);
  
    const blob = await new Promise((resolve) => canvas.toBlob(resolve, 'image/png'));
    setPhotoBlob(blob);
  
    const reader = new FileReader();
    reader.onload = () => {
      setFridgeImage(reader.result);
    };
    reader.readAsDataURL(blob);
  
    setMessage('Photo capturée avec succès.');
  };
  

  return (
    <>
    {isLoggedIn && (
      
      <div className="upload-container">
      <h1 className='title-upload-image'>Quels aliments avez-vous ?</h1>
      <label htmlFor="file-input" className="upload-icon" title="Uploader une image">
        <AiOutlineUpload />
      </label>
      <input
        id="file-input"
        type="file"
        className="hidden-input"
        onChange={handleFileChange}
      />

      {imageSelected && (
        <button className="ca-button" onClick={() => handleSubmit(image)}>
          Envoyer l'image
        </button>
      )}

      <label
        className="upload-icon"
        onClick={startCamera}
        title="Activer la caméra"
      >
        <AiOutlineCamera />
      </label>

      {isCameraActive && (
        <div className="camera-container">
          <video ref={videoRef} autoPlay playsInline className="camera-video" />
          <button className="ca-button" onClick={takePhoto}>
            Capturer une photo
          </button>
        </div>
      )}

      {photoBlob && (
        <button className="ca-button margin-top" onClick={() => handleSubmit(photoBlob)}>
          Envoyer la photo
        </button>
      )}

      <canvas ref={canvasRef} style={{ display: 'none' }} />

      {image && <p>{image.name}</p>}
      {message && <p>{message}</p>}
    </div>
    )}
    </>
  );
};

export default ImageManager;
