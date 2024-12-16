import { useState } from 'react';
import { useColorContext } from './ColorContext';

interface RecipeStepProps {
  stepText: string;
}

export default function RecipeStep({ stepText }: RecipeStepProps) {
  /**
   * TODO #5:
   * 1. Add state for tracking if step is completed
   * 2. Update styles based on state
   */

  const [isComplete, setComplete] = useState(false);

  const { color } = useColorContext();

  return (
    <li
      style={{
        backgroundColor: color,
      }}
    >
      <label
        style={{
          textDecoration: isComplete ? 'line-through' : 'none',
        }}
      >
        {stepText}
      </label>
      <input
        type="checkbox"
        checked={isComplete}
        onChange={() => setComplete(!isComplete)}
      ></input>
    </li>
  );
}
