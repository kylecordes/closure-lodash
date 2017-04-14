# Lodash + Closure Compiler Attempt

This repository is an attempt to use lodash with Closure Compiler. It does not
work yet.

## Distraction: TypeScript

This repo also uses TypeScript, because the reason I care about these things is
that I'm looking to use TypeScript enclosure compiler to compile Angular
applications. But that doesn't actually matter at all for the problems I'm
having. The difficulty comes in the following line, which is compiled from
TypeScript to the exact same line of ES2015.

```
import { flatMap } from 'lodash-es';
```

## Already tried: plain lodash

My first several attempts were with ordinary lodash. Unfortunately its packaging
appears to be particularly difficult to make Closure Compiler understand that
the incoming code should be made available as a module for importation from
ES2015. I could find no combination of settings to avoid an error of the form:

```
ERROR - required "module$lodash_es" namespace never provided
```

## Current theory: lodash-es

The package `lodash-es` is the same feature set as lodash, but packaged as
ES2015 modules. Closure Compiler correctly understands these modules and begins
the process of working with them.

Unfortunately, it then crashes with an `INTERNAL ERROR`.

If that can be fixed, file copy hackery could be used to allow application code
to `import { flatMap } from 'lodash';` and have it resolve to the `-es` code
behind the scenes.

## Next steps

Here are some ideas for things that might work.

Hope the Closure Compiler team fixes that `INTERNAL ERROR`.

Consider a fork of `lodash-es`, mechanically bulk-edited to avoid the error
condition that triggers the internal error. But solving a problem with a fork is
really of much use in open source; because most other users won't find the fork
and won't use it if they do find it - leaving the original problem unsolved for
the community. Forks are great for urgent internal fixes but not so useful at
scale.

Find some newer alternative to `lodash` written in TypeScript, with support for
Closure. (...erhaps with help from tsickle.)
