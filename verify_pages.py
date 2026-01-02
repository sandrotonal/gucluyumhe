from playwright.sync_api import sync_playwright

def verify_site():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(
            viewport={'width': 1280, 'height': 800}
        )
        page = context.new_page()

        # 1. Verify About Page (Hakkimda)
        try:
            print("Navigating to Hakkimda...")
            page.goto("http://localhost:3000/hakkimda")
            page.wait_for_selector("text=Hakkımda", timeout=10000)
            page.screenshot(path="/home/jules/verification/hakkimda_page.png")
            print("Hakkimda page verified.")
        except Exception as e:
            print(f"Hakkimda failed: {e}")

        # 2. Verify Contact Page
        try:
            print("Navigating to Contact...")
            page.goto("http://localhost:3000/contact")
            page.wait_for_selector("text=İletişim", timeout=10000)
            page.screenshot(path="/home/jules/verification/contact_page.png")
            print("Contact page verified.")
        except Exception as e:
            print(f"Contact failed: {e}")

        # 3. Verify Journal Page
        try:
            print("Navigating to Journal...")
            page.goto("http://localhost:3000/journal")
            page.wait_for_selector("text=Gelişim Günlüğü", timeout=10000)
            page.screenshot(path="/home/jules/verification/journal_page.png")
            print("Journal page verified.")
        except Exception as e:
            print(f"Journal failed: {e}")

        browser.close()

if __name__ == "__main__":
    verify_site()
