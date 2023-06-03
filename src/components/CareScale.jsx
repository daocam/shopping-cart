import Sun from '../assets/sun.svg';
import Water from '../assets/water.svg';

const quantityLabel = {
  1: 'little',
  2: 'moderately',
  3: 'a lot',
};

const CareScale = ({ scaleValue, careType }) => {
  const range = [1, 2, 3];

  const scaleType =
    careType === 'light' ? (
      <img src={Sun} alt="sun-icon" />
    ) : (
      <img src={Water} alt="water-icon" />
    );

  return (
    <div
      onClick={() =>
        alert(
          `Cette plante requiert ${quantityLabel[scaleValue]} ${
            careType === 'light' ? 'de lumière' : "d'arrossage"
          }`
        )
      }
    >
      {range.map((rangeElt) =>
        scaleValue >= rangeElt ? (
          <span key={rangeElt.toString()}>{scaleType}</span>
        ) : null
      )}
    </div>
  );
};

export default CareScale;
