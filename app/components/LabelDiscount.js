function LabelDiscount({ discount, price }) {
  const saveValue = (discount / price) * 100;

  return (
    <span className="ml-2 rounded-full bg-red-600 px-4 py-1 text-xs font-normal uppercase text-primary">{`save ${Math.ceil(
      saveValue,
    )}%`}</span>
  );
}

export default LabelDiscount;
