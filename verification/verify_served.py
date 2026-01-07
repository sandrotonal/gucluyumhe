from playwright.sync_api import sync_playwright

def verify_site_export():
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page()

        # Navigate to the local server
        page.goto("http://localhost:3000")

        # Take screenshot of homepage
        page.screenshot(path="verification/home_served.png")

        # Check about page link
        hakkimda_link = page.get_by_role("link", name="Hakkımda").first
        if hakkimda_link:
            hakkimda_link.click()
            page.screenshot(path="verification/about_served.png")

        browser.close()

if __name__ == "__main__":
    verify_site_export()
