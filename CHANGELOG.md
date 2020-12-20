# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]
### Changed
- Translated text: The `de` and `en` properties are now hardcoded in the schema instead of using the language code pattern because these two are needed and used by RDMO. Maybe a more general approach will return in the future.

## [0.1.0] - 2020-12-20
### Added
- First schema version
- contains domain, options, and question catalog as root element
- Distribute JSON schema and validation function compiled with AJV

[Unreleased]: https://github.com/tamaracha/rdmo-json-schema/compare/v0.1.0...HEAD
[0.1.0]: https://github.com/tamaracha/rdmo-json-schema/releases/tag/v0.1.0
