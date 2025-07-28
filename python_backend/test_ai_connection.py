import requests
from gradio_client import Client

def test_ai_service_connection():
    MAIN_SERVER = "i9d7g2rzu0mhlx"
    ALT_SERVER = "wlsm2bnymufalx"
    DEV_SERVER = "https://relation-minnesota-identical-directions.trycloudflare.com"
    
    servers_to_test = [
        f"https://{MAIN_SERVER}-7860.proxy.runpod.net/",
        f"https://{ALT_SERVER}-7860.proxy.runpod.net/",
        DEV_SERVER
    ]
    
    for i, server_url in enumerate(servers_to_test):
        try:
            print(f"Testing server {i+1}: {server_url}")
            
            # First test basic HTTP connection
            response = requests.get(server_url, timeout=10)
            print(f"  ✅ HTTP connection successful: Status {response.status_code}")
            
            # Then test Gradio client connection
            client = Client(server_url)
            print(f"  ✅ Gradio client connection successful")
            
            return True, server_url
            
        except requests.exceptions.Timeout:
            print(f"  ❌ Connection timeout")
        except requests.exceptions.ConnectionError:
            print(f"  ❌ Connection failed")
        except Exception as e:
            print(f"  ❌ Error: {str(e)}")
    
    return False, None

if __name__ == "__main__":
    print("🔍 Testing AI Service Connection...")
    print("=" * 50)
    
    success, working_server = test_ai_service_connection()
    
    if success:
        print(f"✅ At least one server is working: {working_server}")
    else:
        print("❌ All AI servers are unreachable")
        print("This explains why the try-on is failing!")
    
    print("=" * 50)
