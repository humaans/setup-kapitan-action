# setup-kapitan-action

## Usage

Setup the `kapitan` CLI:

```yaml
- uses: actions/setup-python@v4
  with:
    python-version: 3.9
- name: Setup Kapitan
  uses: humaans/setup-kapitan-action@v2.2
  with:
    version: 0.31.0
    python-version: 3.9
```

Python version must match that which the pex file was created with, otherwise it will fail to execute. The following versions are currently supported:

| Kapitan  | Python |
| -------- | ------ |
| 0.30.0   | 3.9    |
| 0.31.0   | 3.9    |

## License

[MIT](LICENSE).
