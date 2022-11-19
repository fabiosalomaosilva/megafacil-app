export interface CircleNumberProps {
  number: string;
  color?: 'white' | 'primary'
}
export default function CircleNumber(props: CircleNumberProps) {
  const color = props.color === undefined || props.color === 'primary' ? `bg-primary text-white flex` : `bg-white text-primary flex`;
  return (
    <div className={`${color} flex flex-col items-center font-semibold justify-center rounded-full h-10 w-10`}>
      {props.number}
    </div>
  );
}
