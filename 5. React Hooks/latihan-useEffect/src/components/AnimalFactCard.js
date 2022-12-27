import React, { useEffect } from 'react';
import { getRandomAnimalFact } from '../utils/api';
import Row from './_base/Row';

/**
 * @todo
 * Selesaikan komponen AnimalFactCard hingga:
 *   1. Menampilkan fakta tentang hewan dari RESTful API
 *      menggunakan fungsi getRandomAnimalFact
 *      berdasarkan props animal.
 *
 *  2. Mengubah UI yang menampikan fact menjadi input dan
 *     menyinkronisasi document.title dengan nilai state fact.
 */

function AnimalFactCard({ animal }) {
  const [image, setImage] = React.useState(null);
  const [fact, setFact] = React.useState(null);

  useEffect(() => {
    const fetchAnimalFact = async (animal) => {
      const { image, fact } = await getRandomAnimalFact(animal);
      setImage(image);
      setFact(fact);
    };
    fetchAnimalFact(animal);
    return () => {
      setFact(null);
      setImage(null);
    };
  }, [animal]);

  useEffect(()=>{
    if(fact !== null){
      document.title = fact;
    }
  }, [fact])

  const handleFactChange = (e) =>{
    setFact(e.target.value);
  }

  return (
    <section>
      <Row label="Image">
        {image === null ? (
          <img src="https://via.placeholder.com/600x400" alt="placeholder" />
        ) : (
          <img src={image} alt={fact} />
        )}
      </Row>
      <Row label="Fact">{fact === null ? <p>Loading fact ...</p> : <textarea value={fact} onChange={handleFactChange}/>}</Row>
    </section>
  );
}

export default AnimalFactCard;
