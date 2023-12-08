function Separator({ styles }: { styles?: string }) {
  return (
    <div className={`${styles}`}>
      <div className={`w-4 h-1 bg-gray-200 `}></div>
    </div>
  );
}

export default Separator;
