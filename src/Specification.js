import { faMemory, faMicrochip } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export function Specification({ specs }) {
  // console.log('Spesification of Vote:',a.specs);
  return (
    <div>
      <h4>Specification</h4>
      <ul className={'specs'}>
        <li>{specs.os}</li>
        <li>
          <FontAwesomeIcon icon={faMicrochip} />
          {specs.processor}</li>
        <li>
          <FontAwesomeIcon icon={faMemory} />
          {specs.ram}</li>
      </ul>

    </div>
  );
}
