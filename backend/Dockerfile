# Use official lightweight Python image
FROM python:3.11-slim

# Set working directory inside container
WORKDIR /app

# Install build dependencies
RUN apt-get update && apt-get install -y --no-install-recommends \
    build-essential gcc \
    && rm -rf /var/lib/apt/lists/*

# Copy requirements first for better cache
COPY requirements.txt .

# Install Python dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Copy backend source code into container
COPY . .

# Expose port 5000
EXPOSE 5000

# Run the app with gunicorn binding to all interfaces on port 5000
CMD ["gunicorn", "app:app", "--bind", "0.0.0.0:5000"]
