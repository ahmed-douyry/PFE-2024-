import React from 'react';
import '../App.css';

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
  { code: 'M101', name: 'Se situer au regard du métier et de la démarche de formation', link: 'https://ofppt.info/download/cours-se-situer-au-regard-du-metier-et-de-la-demarche-de-formation-2/?tmstv=1719105513' },
  { code: 'M102', name: 'Comprendre les enjeux d’un système d’information', link: 'https://ofppt.info/wp-content/uploads/2021/10/m102-resume-theorique-6156faf90a3de-1.pdf' },
  { code: 'M103', name: 'Concevoir un réseau informatique', link: 'https://ofppt.info/wp-content/uploads/2021/10/m103-resume-theorique-6156fb3f1813f-1.pdf' },
  { code: 'M104', name: 'Fonctionnement du système d’exploitation', link: 'https://ofppt.info/download/resume-fonctionnement-du-systeme-dexploitation/?tmstv=1719105516' },
  { code: 'M105', name: 'Gérer une infrastructure virtualisée', link: 'https://ofppt.info/download/resume-gerer-une-infrastructure-virtualisee/?tmstv=1719105516' },
  { code: 'M106', name: 'Automatiser les tâches d’administration', link: 'https://ofppt.info/download/cours-automatiser-les-taches-dadministration/?tmstv=1719105517' },
  { code: 'M107', name: 'Sécuriser un système d’information', link: 'https://ofppt.info/download/resume-securiser-un-systeme-dinformation/?tmstv=1719105518' },
  { code: 'M108', name: 'Développer une veille technologique', link: 'https://ofppt.info/download/cours-developper-une-veille-technologique/?tmstv=1719105520' },
];

const secondYearOptions = [
  { name: 'Option Cloud computing', link: '/pdfs/option_cloud_computing.pdf' },
  { name: 'Option Cyber Sécurity', link: '/pdfs/option_cyber_security.pdf' },
  { name: 'Option Systèmes et réseaux', link: '/pdfs/option_systemes_reseaux.pdf' },
];

const CourseList = ({ courses }) => (
  <table className="w-full border-collapse">
    <tbody>
      {courses.map((course, index) => (
        <tr key={index} className="border-t">
          <td className="p-2 border">{course.code}</td>
          <td className="p-2 border">
            <a href={course.link} target="_blank" rel="noopener noreferrer"    className="text-blue-500 hover:underline">{course.name}</a>
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
            <a href={option.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">{option.name}</a>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

const Infra = () => {
  return (
    <div className="App p-4">
      <h1 className="text-2xl font-bold mb-4">Infrastructure Digitale</h1>
      <CourseList courses={courses} />
      
      <h2 className="text-xl font-semibold mt-6 mb-2">1er année</h2>
      <ModuleList modules={firstYearModules} />
      
      <h2 className="text-xl font-semibold mt-6 mb-2">2ème année</h2>
      <OptionList options={secondYearOptions} />
    </div>
  );
}

export default Infra;
