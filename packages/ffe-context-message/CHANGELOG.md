# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

       <a name="2.0.6"></a>

## 2.0.6 (2018-01-04)

**Note:** Version bump only for package ffe-context-message

       # CHANGELOG

## Version 2.0.5

* Improve responsiveness by placing the icon on the top of the box for small screens.

## Version 2.0.4

* Set width explicitly to 100% otherwise the box won't take all its space if it's within a container with `display: flex;`

## Version 2.0.3

* Support both versions 9 and 10 of `ffe-core`

## Version 2.0.2

* Replaced hardcoded transition properties with variables from ffe-core

## Version 2.0.1

* Content is now centered vertically.

## Version 2.0.0

### Breaking changes

Bumped peer dependency version of ffe-core. No external API change, but this version requires a new major of `ffe-core`

* Renamed color names to stay in sync with refactoring in ffe-core@9.x

To migrate, update your app to ffe-core version 9.x

## Version 1.3.0

### 🚀 New features

* FFE-177: Add support for the `--compact` modifier, for creating smaller context messages

## Version 1.2.0

* Add support for --error modifier with same bg color as `ffe-message-box--error`

## Version 1.1.0

* Add support for --success modifier with same bg color as `ffe-message-box--success`

## Version 1.0.4

* Add rounded corners

## Version 1.0.3

* Reduce margin between header and body text.
* Added padding to svg-icon.

## Version 1.0.0

First version