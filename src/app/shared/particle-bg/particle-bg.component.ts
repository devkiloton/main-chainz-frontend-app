/* eslint-disable id-blacklist */
import { AsyncPipe, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { NgParticlesModule } from 'ng-particles';
import { BehaviorSubject } from 'rxjs';
import { ThemesService } from 'src/app/services/themes/themes.service';
import type { Container, Engine } from 'tsparticles-engine';
import { ClickMode, HoverMode, MoveDirection, OutMode } from 'tsparticles-engine';
import { loadSlim } from 'tsparticles-slim';

@Component({
  selector: 'app-particle-bg',
  standalone: true,
  imports: [NgParticlesModule, AsyncPipe, NgIf],
  templateUrl: './particle-bg.component.html',
  styleUrls: ['./particle-bg.component.scss'],
})
export class ParticleBgComponent {
  private readonly _themesService = inject(ThemesService);

  public readonly theme$ = this._themesService.theme$;
  private readonly _loaded$ = new BehaviorSubject<boolean>(false);
  public readonly loaded$ = this._loaded$.asObservable();

  public idlight = 'tsparticlesLight';
  public idDark = 'tsparticlesDark';

  /* or the classic JavaScript object */
  public particlesOptionsLight = {
    background: {
      color: {
        value: 'transparent',
      },
    },
    fullScreen: {
      enable: true,
      zIndex: -1,
    },
    style: {
      position: 'absolute',
    },
    duration: 0,
    fpsLimit: 90,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: ClickMode.repulse,
        },
        onHover: {
          enable: true,
          mode: HoverMode.grab,
          parallax: {
            enable: true,
            smooth: 10,
            force: 60,
          },
        },
        resize: true,
      },
      modes: {
        attract: {
          quantity: 60,
          distance: 200,
        },
        grab: {
          distance: 200,
        },
        connect: {
          distance: 200,
          links: {
            opacity: 0.5,
          },
          radius: 80,
        },
      },
    },
    particles: {
      color: {
        value: '#212121',
      },
      links: {
        color: '#212121',
        distance: 150,
        enable: true,
        opacity: 0.5,
        width: 1,
      },
      move: {
        direction: MoveDirection.none,
        enable: true,
        outModes: {
          default: OutMode.out,
        },
        random: true,
        speed: 2,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 100,
      },
      opacity: {
        value: 0.5,
      },
      shape: {
        type: 'circle',
      },
      size: {
        value: { min: 1, max: 5 },
      },
    },
    detectRetina: true,
  };

  public particlesOptionsDark = {
    background: {
      color: {
        value: 'transparent',
      },
    },
    fullScreen: {
      enable: true,
      zIndex: -1,
    },
    style: {
      position: 'absolute',
    },
    duration: 0,
    fpsLimit: 90,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: ClickMode.repulse,
        },
        onHover: {
          enable: true,
          mode: HoverMode.grab,
          parallax: {
            enable: true,
            smooth: 10,
            force: 60,
          },
        },
        resize: true,
      },
      modes: {
        attract: {
          quantity: 60,
          distance: 200,
        },
        grab: {
          distance: 200,
        },
        connect: {
          distance: 200,
          links: {
            opacity: 0.5,
          },
          radius: 80,
        },
      },
    },
    particles: {
      color: {
        value: '#ffffff',
      },
      links: {
        color: '#ffffff',
        distance: 150,
        enable: true,
        opacity: 0.5,
        width: 1,
      },
      move: {
        direction: MoveDirection.none,
        enable: true,
        outModes: {
          default: OutMode.out,
        },
        random: true,
        speed: 2,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 100,
      },
      opacity: {
        value: 0.5,
      },
      shape: {
        type: 'circle',
      },
      size: {
        value: { min: 1, max: 5 },
      },
    },
    detectRetina: true,
  };

  public particlesLoaded(_container: Container): void {
    this._loaded$.next(true);
  }

  public async particlesInit(engine: Engine): Promise<void> {
    await loadSlim(engine);
  }
}
