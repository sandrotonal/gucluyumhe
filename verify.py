from playwright.sync_api import sync_playwright

def verify_brand_and_blog():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        # 1. Verify Home Page
        print("Navigating to Home...")
        page.goto("http://localhost:3000")
        page.wait_for_selector("text=Merhaba, ben Ömer Özbay")
        page.screenshot(path="desktop_home_page.png", full_page=True)
        print("Home Page screenshot saved.")

        # 2. Verify Projects Page
        print("Navigating to Projects...")
        page.goto("http://localhost:3000/projects")
        page.wait_for_selector("text=Tüm Projelerim")
        page.screenshot(path="desktop_projects_page.png", full_page=True)
        print("Projects Page screenshot saved.")

        # 3. Verify Blog Listing Page
        print("Navigating to Blog...")
        page.goto("http://localhost:3000/blog")
        page.wait_for_selector("text=Yazılar & Düşünceler")
        page.screenshot(path="desktop_blog_page.png", full_page=True)
        print("Blog Page screenshot saved.")

        # 4. Verify Contact Page
        print("Navigating to Contact...")
        page.goto("http://localhost:3000/contact")
        page.wait_for_selector("text=İletişime Geçin")
        page.screenshot(path="desktop_contact_page.png", full_page=True)
        print("Contact Page screenshot saved.")

        # 5. Mobile Verification (Home)
        print("Verifying Mobile Layout...")
        page.set_viewport_size({"width": 375, "height": 812})
        page.goto("http://localhost:3000")
        page.wait_for_selector("text=Merhaba, ben Ömer Özbay")
        page.screenshot(path="mobile_home_page.png", full_page=True)
        print("Mobile Home Page screenshot saved.")

        browser.close()

if __name__ == "__main__":
    verify_brand_and_blog()
