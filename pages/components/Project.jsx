import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import {content} from '../../styles/font';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import moment from 'moment/moment';

const Project = ({info}) => {
  return (
    <div>
      <h3 style={info.style}>{info.title}</h3>
      <p>
        {info.company !== undefined &&
          info.company !== null &&
          info.company + ' - '}
        {info.location}
      </p>
      <p>
        {`${moment (info.startDate).format ('MMM YYYY')}`} -
        {info.endDate === 'Present'
          ? 'Present'
          : `${moment (info.endDate).format ('MMM YYYY')}`}
      </p>
      <div>
        <Link href={info.link.github}>
          <FontAwesomeIcon icon={faGithub} color="#f0f8ff" />
        </Link>
      </div>
    </div>
  );
};

export default Project;
