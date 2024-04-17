# Pyenv-Win Cheat Sheet

## Step-by-Step Guide to Install pyenv-win on Windows 10

### Step 1: Install Prerequisites
- **Install Git for Windows**: You’ll need Git to install `pyenv-win`. You can download and install it from [Git's official website](https://git-scm.com/download/win).
- **Install Python**: `pyenv-win` does not install Python; it manages multiple installations. Download Python from the [official Python website](https://www.python.org/downloads/windows/). Ensure to check the box that says "Add Python to PATH" at the beginning of the installation process.

### Step 2: Install `pyenv-win`
Clone the `pyenv-win` repository into your user profile using Git:
```cmd
git clone https://github.com/pyenv-win/pyenv-win.git %USERPROFILE%\.pyenv
```

##### Step 3: Set Environment Variables:
To use pyenv-win, you need to add it to your system's PATH. Follow these steps:

- Open the Start Search, type "env", and select Edit the system environment variables (System Properties window will open).
- Click on the Environment Variables button.
- Under System Variables, find the Path variable and click Edit.
  
Click New and add the following two paths:
```cmd
%USERPROFILE%\.pyenv\pyenv-win\bin
%USERPROFILE%\.pyenv\pyenv-win\shims
```
Click OK on all dialogs to close them and apply the changes.

##### Step 4: Verify Installation
pyenv --version

## Check Pyenv Version
Check the installed `pyenv-win` version:
```cmd
pyenv --version
```

## List Installed Python Versions
List all Python versions installed and managed by `pyenv-win`:
```cmd
pyenv versions
```

## List Available Python Versions for Installation
Display a list of Python versions available for installation:
```cmd
pyenv install --list
```

## Install a Specific Python Version
Install a specific version of Python using `pyenv-win`:
```cmd
pyenv install 3.x.x
```
Replace `3.x.x` with the version number you want to install.

## Set Global Python Version
Set a specific Python version as the global default:
```cmd
pyenv global 3.x.x
```

## Set Global Python Version
Set a specific Python version as the shell default:
```cmd
pyenv shell 3.x.x
```
Replace `3.x.x` with the version number you wish to set as default.
