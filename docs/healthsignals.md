# HealthSignals — iPhone Health Data Dashboard

HealthSignals is a personal SwiftUI project for reading Apple Health data in one place. The current app interface is named **Don't Forget**; the Xcode project retains the HealthSignals name.

The app requests read access to 32 HealthKit metrics across activity, heart, vitals, mobility, body, nutrition, and recovery. It shows the values that are available, reports missing readings with metric-specific guidance, and keeps derived daily aggregates on the device. Raw HealthKit samples are not uploaded or written back to HealthKit.

The implementation uses SwiftUI, HealthKit, local aggregation, and a view model that refreshes data when the app opens or returns to the foreground. Simulator builds use labeled sample readings; real-device builds use the HealthKit provider. The project includes automated simulator tests.

In a September 2026 device check, HealthKit returned data for 15 of 32 requested metrics on the test iPhone. A missing value does not identify its cause by itself; it may mean no accessible sample, an unsupported source, an unreadable record, or a query problem. This is a personal data dashboard, not a medical or diagnostic tool.

The app source is currently private. This page describes the project so employers can understand its scope without suggesting that a public repository or live demo exists.
