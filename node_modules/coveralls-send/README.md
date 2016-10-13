# coveralls-send

This binary is a drop-in replacement of [node-coveralls](https://github.com/nickmerwin/node-coveralls/tree/586bbd9112add7c6a388bb5418b69ceb3cfa9769/bin) binary with the sensible
differece that it will not cause the Travis build to fail if there is an error
(e.g the annoying 422 "Couldn't find a repository matching this job" error that
seems to happen randomly).


## Usage

For usage instructions, please go here [node-coveralls](https://github.com/nickmerwin/node-coveralls/blob/master/README.md#usage).

