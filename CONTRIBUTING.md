# Contributing to EuroConform

Thank you for your interest in contributing to EuroConform! This document provides guidelines and instructions for contributing.

## Code of Conduct

By participating in this project, you agree to maintain a respectful and professional environment for all contributors.

## How to Contribute

### Reporting Bugs

If you find a bug, please open an issue with:
- Clear description of the problem
- Steps to reproduce
- Expected vs actual behavior
- Environment details (OS, Node version, etc.)
- Relevant logs or screenshots

### Suggesting Features

Feature suggestions are welcome! Please open an issue with:
- Clear description of the feature
- Use case and benefits
- Potential implementation approach
- Any relevant examples

### Pull Requests

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Run tests and linting (`npm run lint`)
5. Commit your changes (`git commit -m 'Add amazing feature'`)
6. Push to your branch (`git push origin feature/amazing-feature`)
7. Open a Pull Request

### Development Setup

```bash
# Clone repository
git clone https://github.com/agilexplus-rv/euroconform.git
cd euroconform

# Install dependencies
npm install

# Set up environment
cp .env.example .env

# Run development server
npm run dev
```

### Coding Standards

- Follow TypeScript best practices
- Use meaningful variable and function names
- Write clear comments for complex logic
- Follow existing code style and patterns
- Keep commits focused and atomic

### Testing

- Run linting before committing: `npm run lint`
- Test your changes thoroughly
- Update tests if you modify functionality
- Ensure production build passes: `npm run build`

### Documentation

- Update README.md if needed
- Add JSDoc comments to public APIs
- Update inline comments for complex logic
- Keep documentation files current

## License

By contributing, you agree that your contributions will be licensed under the same license as the project.

