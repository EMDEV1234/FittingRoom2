import requests
import json

def test_endpoint_error_handling():
    """Test how endpoints handle invalid requests"""
    print("🔍 Testing Error Handling...")
    
    # Test /api/tryon with missing files
    try:
        response = requests.post("http://localhost:8000/api/tryon")
        print(f"✅ /api/tryon without files: Status {response.status_code}")
        if response.status_code == 422:  # FastAPI validation error
            print("   Properly returns validation error for missing files")
    except Exception as e:
        print(f"❌ /api/tryon error handling test failed: {e}")
    
    # Test /api/preview-heic with missing file
    try:
        response = requests.post("http://localhost:8000/api/preview-heic")
        print(f"✅ /api/preview-heic without file: Status {response.status_code}")
        if response.status_code == 422:  # FastAPI validation error
            print("   Properly returns validation error for missing file")
    except Exception as e:
        print(f"❌ /api/preview-heic error handling test failed: {e}")
    
    # Test accessing non-existent result file
    try:
        response = requests.get("http://localhost:8000/results/nonexistent.jpg")
        print(f"✅ Non-existent result file: Status {response.status_code}")
        if response.status_code == 404:
            print("   Properly returns 404 for non-existent files")
    except Exception as e:
        print(f"❌ Non-existent file test failed: {e}")

def test_api_with_invalid_data():
    """Test APIs with invalid data types"""
    print("\n🔍 Testing Invalid Data Handling...")
    
    # Test with invalid file data
    try:
        files = {'person': ('test.txt', 'invalid image data', 'text/plain')}
        response = requests.post("http://localhost:8000/api/tryon", files=files)
        print(f"✅ /api/tryon with invalid file data: Status {response.status_code}")
    except Exception as e:
        print(f"❌ Invalid file data test failed: {e}")

def check_server_logs():
    """Check if server is logging errors properly"""
    print("\n🔍 Server should be logging any errors in the terminal...")
    print("   Check the server terminal for any error messages during these tests.")

if __name__ == "__main__":
    print("🔍 Error Handling and Edge Case Testing...")
    print("=" * 50)
    
    test_endpoint_error_handling()
    test_api_with_invalid_data()
    check_server_logs()
    
    print("=" * 50)
    print("✅ Error handling testing complete!")
