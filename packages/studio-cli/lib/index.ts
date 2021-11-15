import arg from 'arg';
import * as path from 'path';
import execa from 'execa';

const args = arg({
  // Types
  '--help': Boolean,
  '--dev': Boolean,
  '--port': Number,
  // Aliases
  '-p': '--port',
});

const DEV_MODE = args['--dev'];
const NEXT_CMD = DEV_MODE ? 'dev' : 'start';

const studioUiDir = path.dirname(require.resolve('@mui/studio-ui/package.json'));

// TODO: read configuration here
const studioUiConfig = {
  foo: 'hello world',
};

execa('next', [NEXT_CMD], {
  cwd: studioUiDir,
  preferLocal: true,
  stdio: 'inherit',
  extendEnv: false,
  // @ts-expect-error We're deliberately not setting NODE_ENV as we want the Next.js CLI to do that
  env: {
    FORCE_COLOR: process.env.FORCE_COLOR,
    STUDIO_UI_CONFIG: JSON.stringify(studioUiConfig),
  },
});
