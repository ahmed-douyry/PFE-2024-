import React from 'react';

const courses = [
  { code: 'EGTS101', name: 'Arabe', link: '/pdfs/EGTS101.pdf' },
  { code: 'EGTS102', name: 'Français', link: '/pdfs/EGTS102.pdf' },
  { code: 'EGTS103', name: 'Anglais technique/Espagnole', link: '/pdfs/EGTS103.pdf' },
  { code: 'EGTS104', name: 'Culture entrepreneuriale-Partie 1', link: 'https://ofppt.info/download/c-u-l-t-u-r-e-e-n-t-r-e-p-r-e-n-e-u-r-i-a-l-e-p-a-r-i-t-i-e-1/?tmstv=1719103028' },
  { code: 'EGTS105', name: 'Compétences comportementales et sociales', link: '/pdfs/EGTS105.pdf' },
  { code: 'EGTS108', name: 'Entrepreneuriat-PIE 1', link: '/pdfs/EGTS108.pdf' },
  { code: 'EGTSA106', name: 'Culture et techniques avancées du numérique', link: 'https://ofppt.info/download/cours-culture-et-techniques-du-numerique/?tmstv=1719103459' },
];

const firstYearModules = [
  { code: 'M101', name: 'Se situer au regard du métier et de la démarche de formation', link: '/pdfs/M101.pdf' },
  { code: 'M102', name: 'Acquérir les bases de l’algorithmique', link: 'https://ofppt.info/download/cours-acquerir-les-bases-de-lalgorithmique/?tmstv=1719103580' },
  { code: 'M103', name: 'Programmer en Orienté Objet', link: 'https://ofppt.info/download/resume-programmer-en-oriente-objet/?tmstv=1719103583' },
  { code: 'M104', name: 'Développer des sites web statiques', link: 'https://ofppt.info/download/cours-developper-des-sites-web-statiques/?tmstv=1719103582' },
  { code: 'M105', name: 'Programmer en JavaScript', link: 'https://ofppt.info/download/cours-programmer-en-javascript/?tmstv=1719103584' },
  { code: 'M106', name: 'Manipuler des bases de données', link: 'https://ofppt.info/download/cours-manipuler-des-bases-de-donnees-partie-1/?tmstv=1719103585' },
  { code: 'M107', name: 'Développer des sites web dynamiques', link: 'https://ofppt.info/download/cours-developper-des-sites-web-dynamiques/?tmstv=1719103585' },
  { code: 'M108', name: 'S’initier à la sécurité des systèmes d’information', link: 'https://ofppt.info/download/cours-sinitier-a-la-securite-des-systemes-dinformation/?tmstv=1719103586' },
];

const secondYearOptions = [
  { name: 'Développement Digital option Applications Mobiles', link: '/pdfs/applications_mobiles.pdf' },
  { name: 'Développement Digital option Web Full Stack', link: '/pdfs/web_full_stack.pdf' },
];

const CourseList = ({ courses }) => (
  <table className="w-full border-collapse">
    <tbody>
      {courses.map((course, index) => (
        <tr key={index} className="border-t">
          <td className="p-2 border">{course.code}</td>
          <td className="p-2 border">
            <a href={course.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">{course.name}</a>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

const ModuleList = ({ modules }) => (
  <table className="w-full border-collapse mt-4">
    <tbody>
      {modules.map((module, index) => (
        <tr key={index} className="border-t">
          <td className="p-2 border">{module.code}</td>
          <td className="p-2 border">
            <a href={module.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">{module.name}</a>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

const OptionList = ({ options }) => (
  <table className="w-full border-collapse mt-4">
    <tbody>
      {options.map((option, index) => (
        <tr key={index} className="border-t">
          <td className="p-2 border">
            <a href={option.link} download className="text-blue-500 hover:underline">{option.name}</a>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

const Dev = () => {
  return (
    <div className="App p-4">
      <h1 className="text-2xl font-bold mb-4">Développement Digital</h1>
      <CourseList courses={courses} />
      
      <h2 className="text-xl font-semibold mt-6 mb-2">1er année</h2>
      <ModuleList modules={firstYearModules} />
      
      <h2 className="text-xl font-semibold mt-6 mb-2">2ème année</h2>
      <OptionList options={secondYearOptions} />
    </div>
  );
}

export default Dev;
