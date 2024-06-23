import React from 'react';
import '../App.css';



const enterpriseCourses = [
  { code: 'EGTS101', name: 'Arabe', link: '/pdfs/EGTS101.pdf' },
  { code: 'EGTS102', name: 'Français', link: '/pdfs/EGTS102.pdf' },
  { code: 'EGTS103', name: 'Anglais technique/Espagnole', link: '/pdfs/EGTS103.pdf' },
  { code: 'EGTS104', name: 'Culture entrepreneuriale-Partie 1', link: '/pdfs/EGTS104.pdf' },
  { code: 'EGTS105', name: 'Compétences comportementales et sociales (soft skills)', link: '/pdfs/EGTS105.pdf' },
  { code: 'EGTS108', name: 'Entrepreneuriat-PIE 1', link: '/pdfs/EGTS108.pdf' },
  { code: 'EGTSA106', name: 'Culture et techniques avancées du numérique', link: '/pdfs/EGTSA106.pdf' },
];

const enterpriseFirstYearModules = [
  { code: 'M101', name: 'Métier et formation', link: '/pdfs/M101.pdf' },
  { code: 'M102', name: 'Droit fondamental', link: '/pdfs/M102.pdf' },
  { code: 'M103', name: 'Management des organisations', link: '/pdfs/M103.pdf' },
  { code: 'M104', name: 'Comptabilité générale 1', link: '/pdfs/M104.pdf' },
  { code: 'M105', name: 'Gestion électronique des données', link: '/pdfs/M105.pdf' },
  { code: 'M106', name: 'Marketing', link: '/pdfs/M106.pdf' },
  { code: 'M107', name: 'Comptabilité générale 2', link: '/pdfs/M107.pdf' },
  { code: 'M108', name: 'Ecrits professionnels', link: '/pdfs/M108.pdf' },
  { code: 'M109', name: 'Statistique', link: '/pdfs/M109.pdf' },
  { code: 'M110', name: 'Logiciel de Gestion Commerciale, Comptable', link: '/pdfs/M110.pdf' },
];

const enterpriseSecondYearOptions = [
  { name: 'Gestion des Entreprises option Commerce et Marketing', link: '/pdfs/option_commerce_marketing.pdf' },
  { name: 'Gestion des Entreprises option Office Manager', link: '/pdfs/option_office_manager.pdf' },
  { name: 'Gestion des Entreprises option Ressources Humaines', link: '/pdfs/option_ressources_humaines.pdf' },
  { name: 'Gestion des Entreprises option Comptabilité et Finance', link: '/pdfs/option_comptabilite_finance.pdf' },
];

const enterpriseThirdYearOptions = [
  { name: 'Gestion des Entreprises option Commerce et Marketing', link: '/pdfs/option_commerce_marketing.pdf' },
  { name: 'Gestion des Entreprises option Office Manager', link: '/pdfs/option_office_manager.pdf' },
  { name: 'Gestion des Entreprises option Ressources Humaines', link: '/pdfs/option_ressources_humaines.pdf' },
  { name: 'Gestion des Entreprises option Comptabilité et Finance', link: '/pdfs/option_comptabilite_finance.pdf' },
];

const CourseList = ({ courses }) => (
  <table className="w-full border-collapse">
    <tbody>
      {courses.map((course, index) => (
        <tr key={index} className="border-t">
          <td className="p-2 border">{course.code}</td>
          <td className="p-2 border">
            <a href={course.link} download className="text-blue-500 hover:underline">{course.name}</a>
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
            <a href={module.link} download className="text-blue-500 hover:underline">{module.name}</a>
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

const Ge = () => {
  return (
    <div className="App p-4">
      

      <h1 className="text-2xl font-bold mb-4 mt-8">Gestion des Entreprises</h1>
      <CourseList courses={enterpriseCourses} />
      
      <h2 className="text-xl font-semibold mt-6 mb-2">1ère année</h2>
      <ModuleList modules={enterpriseFirstYearModules} />
      
      <h2 className="text-xl font-semibold mt-6 mb-2">2ème année</h2>
      <OptionList options={enterpriseSecondYearOptions} />
      
      <h2 className="text-xl font-semibold mt-6 mb-2">3ème année</h2>
      <OptionList options={enterpriseThirdYearOptions} />
    </div>
  );
}

export default Ge;
