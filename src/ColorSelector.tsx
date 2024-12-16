import { useColorContext } from './ColorContext';

export default function ColorSelector() {
  const { setColor } = useColorContext();

  return (
    <form>
      <label>Task Color</label>
      <select
        onChange={(e) => {
          setColor(e.target.value);
        }}
      >
        <option value="skyblue">Sky Blue</option>
        <option value="lightgreen">Light Green</option>
        <option value="orange">Orange</option>
      </select>
    </form>
  );
}
