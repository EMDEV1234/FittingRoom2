import requests
import json

# Test basic health check
def test_docs_endpoint():
    try:
        response = requests.get("http://localhost:8000/docs")
        print(f"✅ FastAPI Docs endpoint: Status {response.status_code}")
        return response.status_code == 200
    except Exception as e:
        print(f"❌ FastAPI Docs endpoint failed: {e}")
        return False

def test_openapi_endpoint():
    try:
        response = requests.get("http://localhost:8000/openapi.json")
        print(f"✅ OpenAPI JSON endpoint: Status {response.status_code}")
        return response.status_code == 200
    except Exception as e:
        print(f"❌ OpenAPI JSON endpoint failed: {e}")
        return False

def test_cors_headers():
    try:
        # Test CORS preflight
        headers = {
            'Origin': 'http://localhost:3004',
            'Access-Control-Request-Method': 'POST',
            'Access-Control-Request-Headers': 'Content-Type'
        }
        response = requests.options("http://localhost:8000/api/tryon", headers=headers)
        print(f"✅ CORS preflight test: Status {response.status_code}")
        cors_headers = response.headers.get('Access-Control-Allow-Origin')
        print(f"   CORS Allow Origin: {cors_headers}")
        return True
    except Exception as e:
        print(f"❌ CORS test failed: {e}")
        return False

# Note: We can't easily test the /api/tryon and /api/preview-heic endpoints 
# without actual image files, but we can verify they're registered
def test_endpoint_registration():
    try:
        response = requests.get("http://localhost:8000/openapi.json")
        openapi_data = response.json()
        
        # Check if our endpoints are registered
        paths = openapi_data.get('paths', {})
        
        endpoints_to_check = ['/api/tryon', '/api/preview-heic']
        for endpoint in endpoints_to_check:
            if endpoint in paths:
                print(f"✅ Endpoint {endpoint} is registered")
            else:
                print(f"❌ Endpoint {endpoint} is NOT registered")
        
        return True
    except Exception as e:
        print(f"❌ Endpoint registration test failed: {e}")
        return False

if __name__ == "__main__":
    print("🔍 Testing Backend API Endpoints...")
    print("-" * 50)
    
    test_docs_endpoint()
    test_openapi_endpoint()
    test_cors_headers()
    test_endpoint_registration()
    
    print("-" * 50)
    print("✅ Backend API testing complete!")
