import { FaLock, FaGlobe, FaCodeBranch } from 'react-icons/fa';
import { SiTypescript, SiJavascript, SiCss3, SiHtml5 } from 'react-icons/si';

type Props = {
  name: string;
  description?: string;
  language?: string;
  updatedAt: string;
  isPrivate: boolean;
};

const languageIcons: { [key: string]: JSX.Element } = {
  TypeScript: <SiTypescript className="text-blue-500" />,
  JavaScript: <SiJavascript className="text-yellow-500" />,
  CSS: <SiCss3 className="text-blue-400" />,
  HTML: <SiHtml5 className="text-orange-500" />,
};

const RepoCard = ({ name, description, language, updatedAt, isPrivate }: Props) => {
  return (
    <div className="rounded-2xl border shadow-sm hover:shadow-md transition p-6 bg-white dark:bg-zinc-900">
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-xl font-semibold truncate">{name}</h2>
        {isPrivate ? (
          <FaLock className="text-gray-500" title="Private" />
        ) : (
          <FaGlobe className="text-green-500" title="Public" />
        )}
      </div>
      <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
        {description || 'No description provided.'}
      </p>
      <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
        <div className="flex items-center gap-2">
          {language && languageIcons[language]} {language || 'Unknown'}
        </div>
        <span>{updatedAt}</span>
      </div>
    </div>
  );
};

export default RepoCard;
