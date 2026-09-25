# Release Studio

**Sürüm notlarını paylaşılabilir bir karta dönüştür.** Markdown metnini yapıştır veya herkese açık bir GitHub sürümünü içe aktar; 16 farklı düzenden birini seç, öne çıkanları gözden geçir ve 1200 × 630 PNG ya da SVG indir.

[Canlı uygulamayı aç](https://hakanbabus.github.io/release-studio/) · [English](README.md) · [Katkı rehberi](CONTRIBUTING.md) · [MIT Lisansı](LICENSE)

[![GitHub Pages'e dağıt](https://github.com/HakanBabus/release-studio/actions/workflows/deploy-pages.yml/badge.svg?branch=main)](https://github.com/HakanBabus/release-studio/actions/workflows/deploy-pages.yml)

## Release Studio ne yapar?

Sürüm sayfaları değişiklikleri listelemek için iyidir. Release Studio, önemli değişiklikleri paylaşılabilir bir görsele dönüştürür. Hesap, sunucu, analiz aracı veya çalışma anında üçüncü taraf bağımlılığı gerektirmeyen küçük bir statik web sitesidir. Sürüm metni tarayıcıda işlenir ve uygulama tarafından kaydedilmez.

## Kullanım

1. Markdown notlarını yapıştır; **GitHub URL** sekmesinden herkese açık bir sürüm ya da README bölümü al veya **Try an example** düğmesine bas.
2. Proje adı, sürüm, başlık, özet ve en fazla üç öne çıkan maddeyi **Fine-tune your card** bölümünden kontrol edip düzenle.
3. Bir stil seç, açık/koyu görünümü değiştir, vurgu rengini ayarla ve **PNG** ya da **SVG** indir.

### GitHub'dan içe aktarma

**GitHub URL** sekmesine şu biçimlerden birini yapıştır:

- Depo: `https://github.com/kullanici/depo` (son yayımlanmış sürümü getirir)
- Son sürüm: `https://github.com/kullanici/depo/releases/latest`
- Belirli sürüm: `https://github.com/kullanici/depo/releases/tag/v1.2.3`
- GitHub API: `https://api.github.com/repos/kullanici/depo/releases/latest` veya `/releases/tags/v1.2.3`

Tarayıcı, GitHub'ın herkese açık Releases API'sine yalnızca **Fetch notes** düğmesine bastığında istek gönderir. `https://github.com/kullanici/depo` gibi bir depo adresi önce son yayımlanmış sürümü arar. Böyle bir sürüm yoksa Release Studio herkese açık README dosyasını açar ve en fazla üç bölüm seçmene izin verir. İstediğin zaman **Pick from README sections** düğmesiyle de README bölümlerini seçebilirsin. Seçtiğin metin Markdown düzenleyicisine kopyalanır; dışa aktarmadan önce düzenleyebilirsin. README'de başlık yoksa düzenleme için tamamı açılır. 1 MB üzerindeki README dosyaları içe aktarılmaz.

Özel depolar ve taslak sürümler kullanılamaz. GitHub anonim isteklere hız sınırı koyabilir; böyle bir durumda ekranda gösterilen süre kadar bekleyebilir veya Markdown notlarını doğrudan yapıştırabilirsin. Kişisel erişim anahtarı gerekmez ve kabul edilmez.

Ayrıştırıcı ilk bölüm başlığı olmayan Markdown başlığını kart başlığı, ilk paragrafı özet ve ilk üç sıralı/sırasız liste maddesini öne çıkanlar olarak kullanır. Başlıkta `v1.4.0` gibi bir sürüm bulursa sürüm alanına alır. Ek liste maddeleri sayılır ve kaynak notlarında kalır. Başlık yoksa “Release update” varsayılan başlık olur.

Markdown bu kart için metin olarak işlenir. Başlıklar, listeler, bağlantılar, biçimlendirme, satır içi kod ve basit HTML etiketleri güvenli biçimde ele alınır; uygulama keyfî HTML göstermez.

## Bilgisayarında çalıştır

Paket kurulumuna veya derleme adımına gerek yok. `site/index.html` dosyasını doğrudan açabilir veya depo kökünde şu komutla yerel sunucu başlatabilirsin:

```powershell
python -m http.server 8000 --directory site
```

Sonra [http://localhost:8000](http://localhost:8000) adresine git.

## Gizlilik ve dışa aktarma

- Yapıştırılan notlar ve içe aktarılan sürüm/README metni açık tarayıcı sekmesinde kalır; uygulama bunları başka bir yere yüklemez veya yerel depolamaya kaydetmez.
- GitHub URL'sini özellikle içe aktardığında tarayıcın herkese açık sürüm veya README içeriğini almak için `api.github.com` adresine bağlanır. İstek kendi ağından GitHub'a gider; Release Studio sunucusu kullanılmaz.
- Site uzaktan font, betik veya görsel yüklemez.
- PNG ve SVG çıktıları tarayıcıda **1200 × 630 piksel** boyutunda hazırlanır.
- Dışa aktarma için SVG görseli ve Canvas destekleyen bir tarayıcı gerekir. PNG oluşturulamazsa SVG indirme seçeneği kullanılabilir.

## GitHub Pages ile yayımla

Depodaki workflow, `main` dalına gönderilen değişikliklerde `site/` içeriğini yayımlar; Actions sekmesinden elle de başlatılabilir.

İlk dağıtım için **Settings → Pages** bölümünde **Build and deployment → Source** ayarını **GitHub Actions** yap. Sonrasında `main` dalına gönderilen değişiklikler otomatik yayımlanır. Dağıtım ilerlemesini **Actions** sekmesinden, canlı adresi ise **Settings → Pages** bölümünden takip edebilirsin.

## Katkı

Hata bildirimleri, erişilebilirlik geri bildirimleri ve küçük iyileştirmeler memnuniyetle karşılanır. Pull request açmadan önce [katkı rehberini](CONTRIBUTING.md) oku. Güvenlik bildirimi için [SECURITY.md](SECURITY.md) dosyasına bak.

## Lisans

Release Studio [MIT Lisansı](LICENSE) ile yayımlanır.
