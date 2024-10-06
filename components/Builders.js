import DeveloperCard from "./DeveloperCard";

function Builders({ builders }) {
  return (
    <div className="container">
      <div className="row row-cols-5 row-cols-md-5 justify-content-center align-items-center gy-4">
        {builders.map((builder) => (
          <div className="col" key={builder.id}>
            <DeveloperCard {...builder} nocap={true} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Builders;
