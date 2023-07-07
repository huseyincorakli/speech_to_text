import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LanguageIcon from '@mui/icons-material/Language';

const Footer = ({darkMode,handleDarkModeToggle}) => {
  return (
    <div className={`${darkMode ? 'bg-zinc-950' : 'bg-slate-300'} mt-7 rounded-lg flex justify-between items-center p-4`}>
      <h2 className={`text-left text-${darkMode ? 'white' : 'neutral-950'}`}>Developed by <strong><a href="https://www.huseyincorakli.com/">HC</a></strong></h2>
      <div className={`flex gap-5 text-${darkMode ? 'white' : 'neutral-950'}`}>
        <a target='_blank' href='https://www.github.com/huseyincorakli'><GitHubIcon /></a>
        <a target='_blank' href='https://www.instagram.com/crklih'><InstagramIcon /></a>
        <a target='_blank' href='https://www.huseyincorakli.com/'><LanguageIcon /></a>
      </div>
    </div>
  );
};

export default Footer;
