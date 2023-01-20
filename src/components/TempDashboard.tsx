import PropTypes from "prop-types";

const TempDashboard = ({
  min,
  max,
  median,
  mean,
}: {
  min: number;
  max: number;
  median: number;
  mean: number;
}) => {
  return (
    <div className="card text-white bg-transparent border-success">
      <div className="card-header text-success bg-transparent border-success">
        Temperature
      </div>
      <div className="card-body m-4 row row-cols-2 row-cols-md-4">
        <div className="col text-center">
          <p className="card-title">Min</p>
          <h5 className="card-text">{min}°C</h5>
        </div>
        <div className="col text-center">
          <p className="card-title">Max</p>
          <h5 className="card-text">{max}°C</h5>
        </div>
        <div className="col text-center mt-4 mt-md-0">
          <p className="card-title">Median</p>
          <h5 className="card-text">{median}°C</h5>
        </div>
        <div className="col text-center mt-4 mt-md-0">
          <p className="card-title">Mean</p>
          <h5 className="card-text">{mean}°C</h5>
        </div>
      </div>
    </div>
  );
};

TempDashboard.propTypes = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  median: PropTypes.number.isRequired,
  mean: PropTypes.number.isRequired,
};

export default TempDashboard;
