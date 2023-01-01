import 'animate.css';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import {content} from '/styles/font';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import moment from 'moment/moment';

const ProjectTag = ({info}) => {
  return (
    <div className={`animate__animated animate__zoomInUp`}>
      <h3 style={content.style}>{info.title}</h3>
      <p style={content.style}>
        {info.company !== undefined &&
          info.company !== null &&
          info.company + ' - '}
        {info.location}
      </p>
      <p style={content.style}>
        {`${moment (info.startDate).format ('MMM YYYY')}`} -
        {info.endDate === 'Present'
          ? 'Present'
          : `${moment (info.endDate).format ('MMM YYYY')}`}
      </p>
      <div>
        {info.type === 'PROJECT' &&
          <Link href={info.link.github}>
            <FontAwesomeIcon icon={faGithub} color="#f0f8ff" />
          </Link>}
      </div>
    </div>
  );
};

export default ProjectTag;
