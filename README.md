# Lemi-Events

A full-stack event management application built with Django REST Framework and React.

## Project Structure

### Backend
- **Framework:** Django 4.2
- **API:** Django REST Framework
- **Database:** SQLite (development)
- **Apps:**
  - `core/` - Main Django project configuration
  - `events/` - Event management (models, serializers, views, URLs)
  - `users/` - User management (models, serializers, views, URLs)
  - `api/` - API endpoints
  - `media/` - User-uploaded files
  - `static/` - Static assets

### Frontend
- **Framework:** React 19.2
- **Build Tool:** Vite 7.2
- **Styling:** Tailwind CSS 4.1
- **Linting:** ESLint 9

## Getting Started

### Prerequisites
- Python 3.8+
- Node.js 16+
- npm or yarn

### Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Create a virtual environment:
```bash
python -m venv venv
```

3. Activate the virtual environment:
```bash
# On macOS/Linux
source venv/bin/activate

# On Windows
venv\Scripts\activate
```

4. Install dependencies:
```bash
pip install -r requirements.txt
```

5. Create a `.env` file based on `.env.example` (if needed)

6. Run migrations:
```bash
python manage.py migrate
```

7. Create a superuser (optional):
```bash
python manage.py createsuperuser
```

8. Start the development server:
```bash
python manage.py runserver
```

The backend will be available at `http://localhost:8000`

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The frontend will be available at `http://localhost:5173`

## Available Scripts

### Backend
- `python manage.py runserver` - Start the development server
- `python manage.py migrate` - Run database migrations
- `python manage.py makemigrations` - Create new migrations
- `python manage.py createsuperuser` - Create an admin user
- `python manage.py test` - Run tests

### Frontend
- `npm run dev` - Start the development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Development

- Backend runs on: `http://localhost:8000`
- Frontend runs on: `http://localhost:5173`
- Django Admin: `http://localhost:8000/admin`

## License

This project is private and proprietary.