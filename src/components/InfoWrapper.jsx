export default function InfoWrapper({ label, data }) {
  return (
    <p>
      <strong className="font-semibold">{label}</strong>: {data}
    </p>
  );
}
