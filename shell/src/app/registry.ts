import { loadRemoteModule } from '@angular-architects/module-federation';

export const registry = {
    mfe1: () => loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost:4201/remoteEntry.js',
        exposedModule: './web-components'
    }),
    mfe2: () => loadRemoteModule({
        type: 'script',
        remoteEntry: 'http://localhost:4202/remoteEntry.js',
        remoteName: 'mfe2',
        exposedModule: './web-components'
    }),
    mfe3: () => loadRemoteModule({
        type: 'script',
        remoteEntry: 'http://localhost:4203/remoteEntry.js',
        remoteName: 'mfe3',
        exposedModule: './mfe3components'
    }),
    mfe4: () => loadRemoteModule({
        type: 'script',
        remoteEntry: 'http://localhost:4204/remoteEntry.js',
        remoteName: 'mfe4',
        exposedModule: './web-components'
    }),
    nav: () => loadRemoteModule({
        type: 'script',
        remoteEntry: 'http://localhost:3001/remoteEntry.js',
        remoteName: 'nav',
        exposedModule: './web-components'
    }),
    shell: () => loadRemoteModule({
        type: 'script',
        remoteEntry: 'http://localhost:5000/remoteEntry.js',
        remoteName: 'shell',
        exposedModule: './web-components'
    })
};
