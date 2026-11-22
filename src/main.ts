import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

bootstrapApplication(App, appConfig)
  .catch((err) => {
    console.error('Erreur bootstrap Angular:', err);
    const banner = document.createElement('div');
    banner.style.cssText = 'position:fixed;top:0;left:0;right:0;background:#e11d48;color:white;padding:24px;z-index:999999;font-family:monospace;font-size:14px;white-space:pre-wrap;box-shadow:0 10px 30px rgba(0,0,0,0.5);';
    banner.textContent = 'ERREUR BOOTSTRAP ANGULAR :\n' + (err?.stack || err?.message || String(err));
    document.body.appendChild(banner);
  });
