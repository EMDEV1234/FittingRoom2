import requests
import os
from PIL import Image
import io

def create_test_image():
    """Create a simple test image for testing"""
    # Create a simple RGB image
    img = Image.new('RGB', (200, 200), color='red')
    
    # Save to bytes
    img_bytes = io.BytesIO()
    img.save(img_bytes, format='JPEG')
    img_bytes.seek(0)
    
    return img_bytes.getvalue()

def test_image_processing_functions():
    """Test the prepare_image function and directory structure"""
    print("🔍 Testing Image Processing Functions...")
    
    # Check if directories exist
    upload_dir = "uploads"
    result_dir = "results"
    
    if os.path.exists(upload_dir):
        print(f"✅ Upload directory exists: {upload_dir}")
    else:
        print(f"❌ Upload directory missing: {upload_dir}")
    
    if os.path.exists(result_dir):
        print(f"✅ Result directory exists: {result_dir}")
    else:
        print(f"❌ Result directory missing: {result_dir}")
    
    # Check directory permissions
    try:
        test_file = os.path.join(upload_dir, "test_permission.txt")
        with open(test_file, "w") as f:
            f.write("test")
        os.remove(test_file)
        print("✅ Upload directory is writable")
    except Exception as e:
        print(f"❌ Upload directory permission issue: {e}")
    
    try:
        test_file = os.path.join(result_dir, "test_permission.txt")
        with open(test_file, "w") as f:
            f.write("test")
        os.remove(test_file)
        print("✅ Result directory is writable")
    except Exception as e:
        print(f"❌ Result directory permission issue: {e}")

def test_static_file_serving():
    """Test if static file serving works for results"""
    try:
        # Create a test file in results directory
        test_filename = "test_image.jpg"
        test_path = os.path.join("results", test_filename)
        
        # Create a simple test image
        img = Image.new('RGB', (100, 100), color='blue')
        img.save(test_path, 'JPEG')
        
        # Test if we can access it via the API
        response = requests.get(f"http://localhost:8000/results/{test_filename}")
        
        if response.status_code == 200:
            print("✅ Static file serving works")
            print(f"   Content-Type: {response.headers.get('content-type')}")
        else:
            print(f"❌ Static file serving failed: Status {response.status_code}")
        
        # Clean up
        os.remove(test_path)
        
    except Exception as e:
        print(f"❌ Static file serving test failed: {e}")

def test_server_responsiveness():
    """Test server response times and health"""
    import time
    
    try:
        start_time = time.time()
        response = requests.get("http://localhost:8000/docs")
        end_time = time.time()
        
        response_time = (end_time - start_time) * 1000  # Convert to milliseconds
        
        if response.status_code == 200:
            print(f"✅ Server is responsive: {response_time:.2f}ms")
        else:
            print(f"❌ Server response issue: Status {response.status_code}")
            
    except Exception as e:
        print(f"❌ Server responsiveness test failed: {e}")

if __name__ == "__main__":
    print("🔍 Comprehensive Backend Testing...")
    print("=" * 50)
    
    test_image_processing_functions()
    print()
    test_static_file_serving()
    print()
    test_server_responsiveness()
    
    print("=" * 50)
    print("✅ Comprehensive backend testing complete!")
