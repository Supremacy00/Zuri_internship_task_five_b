
import PropTypes from 'prop-types'; 
import ReactPlayer from 'react-player';

const Assistant = ({ position, explanation, isVisible }) => {
  return (
    <div
      className={`fixed transition-transform duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
      }}
    >
      <ReactPlayer
        url="path/to/your/assistant-video.mp4"
        playing
        loop
        controls={false}
        width="150px"
        height="150px"
        style={{ borderRadius: '50%', background: 'transparent' }}
      />
      {explanation && (
        <div className="text-white text-sm mt-2 bg-gray-800 p-2 rounded shadow">
          {explanation}
        </div>
      )}
    </div>
  );
};


Assistant.propTypes = {
  position: PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
  }).isRequired,
  explanation: PropTypes.string,
  isVisible: PropTypes.bool.isRequired,
};

export default Assistant;
