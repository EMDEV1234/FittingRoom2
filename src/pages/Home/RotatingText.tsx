import React, {useState, useEffect} from 'react';

interface RotatingTextProps {
    sentences: string[];
    typingSpeed?: number;
    delayBetweenSentences?: number;
}

const RotatingText: React.FC<RotatingTextProps> = ({ 
    sentences, 
    typingSpeed = 50, 
    delayBetweenSentences = 1000 
}) => {
  const [currentSentenceIndex, setCurrentSentenceIndex] = useState<number>(0);
  const [currentText, setCurrentText] = useState<string>('');
  const [isDeleting, setIsDeleting] = useState<boolean>(false);
  const [charIndex, setCharIndex] = useState<number>(0);
  const [typing, setTyping] = useState<boolean>(true);

  useEffect(() => {
    if (typing) {
      const handleTyping = () => {
        const fullText = sentences[currentSentenceIndex];
        
        if (!fullText) {
          return;
        }
        
        if (!isDeleting) {
          setCurrentText(fullText.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);

          if (charIndex === fullText.length - 1) {
            setTyping(false);
            setTimeout(() => setIsDeleting(true), delayBetweenSentences);
          }
        } else {
          setCurrentText(fullText.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);

          if (charIndex === 0) {
            setIsDeleting(false);
            setTyping(false);
            setCurrentSentenceIndex((prev) => (prev + 1) % sentences.length);
          }
        }
      };

      const typingInterval = setInterval(handleTyping, typingSpeed);
      return () => clearInterval(typingInterval);
    } else {
      setTyping(true);
    }
  }, [charIndex, currentSentenceIndex, isDeleting, sentences, typing, typingSpeed, delayBetweenSentences]);

  return <div>{currentText}</div>;
};

export default RotatingText;
