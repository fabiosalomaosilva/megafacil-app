export interface CardPorps {
  colSpan?: number;
  title?: string;
  color?: 'primary' | 'white' | 'danger' | 'warning';
  children?: JSX.Element;
}

export default function Card(props: CardPorps) {

  const color = `bg-${props.color ?? 'primary'}`;
  const colSpan = `col-span-${props.colSpan ?? 4}`;

  return (
    <div className={`${colSpan} min-h-20 rounded ${color} shadow-lg p-5`}>
      <div className="uppercase text-md font-bold text-gray-500 mb-5">
        {props.title}
      </div>
      {props.children}
    </div>
  );
}
