---
date: 2023-07-18
---

# SemVer

## Docs

> Reference: 
> - [SemVer 入门文章](https://juejin.cn/post/7122240572491825160)
> - [SemVer 文档](https://semver.org/)
> - [node-semver](https://github.com/npm/node-semver)

### 版本格式

- 主版本号（major）：当你做了与当前 API 不兼容的修改时，需要递增主版本号。
- 次版本号（minor）：当你添加了可向后兼容的功能时，需要递增次版本号。
- 修订号（patch）：当你修复了可向后兼容的 bug 时，需要递增修订号。
- 先行版本号：软件发行生命周期中出现的版本号，如 `pre-alpha`, `alpha` 等。

### 规则

- 波浪符号范围（[Tilde Ranges](https://github.com/npm/node-semver#tilde-ranges-123-12-1)）：如果有指定次版本号，修订号就可以改变；如果没有指定次版本号，次版本号就可以改变。

```markdown
- `~1.2.3` 相当于 `>=1.2.3 <1.(2+1).0` 相当于 `>=1.2.3 <1.3.0-0`
- `~1` 相当于 `>=1.0.0 <(1+1).0.0` 相当于 `>=1.0.0 <2.0.0`
```

- 插入符号范围（[Caret Ranges](https://github.com/npm/node-semver#caret-ranges-123-025-004)）：不修改 `major.minor.patch` 最左边的非零项，其他项可以修改。

```markdown
- `^1.2.3` 相当于 `>=1.2.3 <2.0.0-0`
- `^0.2.3` 相当于 `>=0.2.3 <0.3.0-0`
```

- 次版本号递增时，修订号必须清零。
- 主版本号递增时，次版本号和修订号必须清零。
- `1.2.3-alpha.1` < `1.2.3-alpha.2` < `1.2.3-beta` < `1.2.3` < `1.2.4`

## 先行版本号

> Reference: [Software release life cycle](https://en.wikipedia.org/wiki/Software_release_life_cycle)

![软件发行生命周期](./_image/software_release_life_cycle.png =x400)

- Pre-alpha: 需求分析、软件设计、软件开发和单元测试等。
- Alpha: 开发者进行白盒测试，团队内部人员进行黑盒测试。
- Beta: 将软件给少部分用户使用并接收用户反馈，继续修复 bug。
- Release Candidate（RC）: 重复 Beta 阶段

## node-semver

> Reference: 
> - [node-semver](https://github.com/npm/node-semver)
> - [@types/semver](https://www.npmjs.com/package/@types/semver)

- `node-semver` 是 SemVer 的实现，遵循 SemVer 的规则，可以帮助开发者递增软件版本等操作。
- `@types/semver` 提供 `node-semver` 类型声明文件。
