# 📝 PasteApp
 
A simple, fast, and local-first web application to create, store, and manage your text snippets or code pastes.
 
---
 
## 🚀 Features
 
- **Create & Update**: Easily create new pastes or update existing ones with a dynamic UI  
- **Duplicate Prevention**: Prevent creating pastes with duplicate titles  
- **Smart UI**: Buttons enable/disable based on input validation  
- **Local Persistence**: Data stored in localStorage (persists after refresh)  
- **Formatted Dates**: Human-readable timestamps for each paste  
- **Searchable**: Quickly find pastes by title  
 
---
 
## 🛠️ Tech Stack
 
- **Frontend**: React.js  
- **State Management**: Redux Toolkit (RTK)  
- **Styling**: CSS  
- **Notifications**: React Hot Toast  
- **Icons**: React Icons / SVG  
 
---
 
## 📦 Installation & Setup
 
### 1. Clone the repository
```bash
git clone https://github.com/NavyaPagadala99/Notes-Paste-Application.git
```
 
### 2. Install dependencies
```bash
cd PasteApp
npm install
```
 
### 3. Run the development server
```bash
npm run dev
```
 
---
 
## 📁 Folder Structure
 
![Folder Structure](image-2.png)
 
---
 
## 🖥️ Usage
 
- **Creating a Paste**: Enter title + content → button enables automatically  
- **Editing**: Click edit icon to load paste into editor  
- **Deleting**: Remove snippets with toast confirmation  
- **Copying**: Use "Copy to Clipboard" feature  
 
---
 
## 📄 Code Highlights
 
### Duplicate Title Check
```js
const alreadyExists = state.pastes.some((p) => p.title === paste.title);
 
if (alreadyExists) {
  toast.error("Paste with same title already exists");
  return;
}
```
 
### Dynamic Button State
```jsx
<button disabled={!title || !content}>
  {pasteId ? "Update Paste" : "Create Paste"}
</button>
```
 
---
 
## 📸 Screenshots
 
### 📌 Main Dashboard
![Dashboard](image.png)
 
### ✍️ Create / Edit Paste
![Editor](image-1.png)
 