import * as execa from 'execa';
import { load } from 'js-yaml';

export function decryptSops(file: string): any {
    return load(execSops(['--decrypt', file]));
}

export function execSops(args: Array<string>): any {
    const { stdout, stderr } = execa.sync('sops', args);
    if (stderr && stderr.length > 0) throw new Error(stderr);
    return stdout;
}
