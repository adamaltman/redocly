ApiConnection conn =
        ApiConnection.builder()
            .servicePlanId({service_plan_id})
            .token({your token})
            .start()
String [] RECIPIENTS = {"{To Number}"};
MtBatchTextSmsResult batch =
          conn.createBatch(
              SinchSMSApi.batchTextSms()
                  .sender("{your free test number}")
                  .addRecipient(RECIPIENTS)
                  .body("This is a test message!")
                  .build()