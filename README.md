# setup-kapitan-action

## Usage

Setup the `kapitan` CLI:

```yaml
- uses: actions/setup-python@v4
  with:
    python-version: 3.9
- name: Setup Kapitan
  uses: humaans/setup-kapitan-action@v2
  with:
    version: 0.30.0
    python-version: 3.9
```

At the moment only python 3.9 with kapitan version 0.30.0 is supported, python version must match that which the pex file was created with, otherwise it will fail to execute.

## License

[MIT](LICENSE).
