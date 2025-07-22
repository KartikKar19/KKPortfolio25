import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const AnimalAnimations = () => {
  const [animals, setAnimals] = useState<Array<{ id: number; corner: string; delay: number }>>([]);

  const animalEmojis = [
    '🐱', '🐈', '😺', '😸', '😹', '😻', '🙀', '😿', '😾', // cats
    '🐶', '🐕', '🦮', '🐕‍🦺', '🐩', '🐺', // dogs
    '🦊', '🐰', '🐹', '🐭', '🐨', '🐼', // other cute animals
    '🦝', '🐸', '🐧', '🦉', '🦆', '🐥' // more variety
  ];
  
  const corners = [
    { name: 'top-left', x: -100, y: -100, enterX: 50, enterY: 50 },
    { name: 'top-right', x: 100, y: -100, enterX: -50, enterY: 50 },
    { name: 'bottom-left', x: -100, y: 100, enterX: 50, enterY: -50 },
    { name: 'bottom-right', x: 100, y: 100, enterX: -50, enterY: -50 }
  ];

  useEffect(() => {
    const createAnimal = () => {
      const corner = corners[Math.floor(Math.random() * corners.length)];
      const newAnimal = {
        id: Date.now() + Math.random(),
        corner: corner.name,
        delay: Math.random() * 2
      };
      
      setAnimals(prev => [...prev, newAnimal]);
      
      // Remove animal after animation completes
      setTimeout(() => {
        setAnimals(prev => prev.filter(animal => animal.id !== newAnimal.id));
      }, 6000 + newAnimal.delay * 1000);
    };

    // Create initial animals
    const interval = setInterval(createAnimal, 2500);
    
    // Create first animal immediately
    createAnimal();

    return () => clearInterval(interval);
  }, []);

  const getAnimalPosition = (cornerName: string) => {
    const corner = corners.find(c => c.name === cornerName);
    return corner || corners[0];
  };

  return (
    <div className="fixed inset-0 pointer-events-none z-40 overflow-hidden">
      <AnimatePresence>
        {animals.map((animal) => {
          const position = getAnimalPosition(animal.corner);
          const randomAnimal = animalEmojis[Math.floor(Math.random() * animalEmojis.length)];
          
          return (
            <motion.div
              key={animal.id}
              className="absolute text-4xl"
              style={{
                [animal.corner.includes('top') ? 'top' : 'bottom']: 0,
                [animal.corner.includes('left') ? 'left' : 'right']: 0,
              }}
              initial={{
                x: position.x,
                y: position.y,
                opacity: 0,
                scale: 0.5,
                rotate: -180
              }}
              animate={{
                x: [position.x, position.enterX, position.enterX, position.x],
                y: [position.y, position.enterY, position.enterY, position.y],
                opacity: [0, 1, 1, 0],
                scale: [0.5, 1.2, 1, 0.5],
                rotate: [-180, 0, 0, 180]
              }}
              transition={{
                duration: 4,
                delay: animal.delay,
                times: [0, 0.3, 0.7, 1],
                ease: "easeInOut"
              }}
            >
              {randomAnimal}
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
};


export default AnimalAnimations