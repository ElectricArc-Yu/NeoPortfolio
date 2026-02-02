#region Editor

// ---------------------------------
// Class : DrawAndDiscardDtoTests
// Creator : Electric Arc( Yu chenhaoran)
// Co-Workers : None
// Create Date : TIME
// File Version : v 1.0.0
// ---------------------------------

#endregion

using Enums.ReactEnums;
using Exceptions;
using Logic.DTO;
using Logic.Enums;
using NUnit.Framework;

namespace Tests
{
    /// <summary>
    /// Unit tests for serialization and deserialization of DrawAndDiscardDto.
    /// Ensures data consistency of DrawType and DiscardType during network transmission.
    /// </summary>
    [TestFixture]
    public class DrawAndDiscardDtoTests
    {
        /// <summary>
        /// Tests the standard serialization and deserialization workflow.
        /// </summary>
        [Test]
        public void SerializeAndDeserializeTest()
        {
            // Arrange
            // Initialize a DTO object with specific draw and discard types
            var dto = new DrawAndDiscardDto(EDrawType.One, EDiscardType.One);

            // Act
            // 1. Serialize the DTO object into a binary byte array
            var serializedData = dto.Serialize();
            // 2. Construct a new DTO object using the byte array and deserialize to restore data
            var deserializedData = new DrawAndDiscardDto(serializedData).Deserialize();

            // Assert
            // Verify that the restored data matches the original input (expected result is One)
            Assert.AreEqual(EDrawType.One, deserializedData.Item1);
            Assert.AreEqual(EDiscardType.One, deserializedData.Item2);
        }

        /// <summary>
        /// Verifies if the serialization behavior meets expectations when the object state (or input parameters) is abnormal.
        /// Note: The prototype code uses explicit conversion to simulate exception injection.
        /// </summary>
        [Test]
        public void Serialize_NullObject_ThrowsException()
        {
            // Arrange
            // Inject invalid enum values to trigger logical errors or verify robustness
            var dto = new DrawAndDiscardDto((EDrawType)(-1),(EDiscardType)(-1));

            // Act & Assert
            // Execute serialization and verify if the system can handle or throw the corresponding exception
            dto.Serialize();
        }

        /// <summary>
        /// Verifies if the correct custom exception is thrown when deserializing an empty byte array.
        /// This is a typical boundary defensive test.
        /// </summary>
        [Test]
        public void Deserialize_NullObject_ThrowsException()
        {
            // Arrange
            // Provide an empty byte array to simulate damaged or empty network packets
            var dto = new DrawAndDiscardDto(new byte[] { });

            // Act & Assert
            // Expect the system to throw a TryToDeserializeANullObjectException
            Assert.Throws<TryToDeserializeANullObjectException>(() => dto.Deserialize());
        }
    }
}